import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3001;
const JWT_SECRET = 'your-secret-key'; // In production, use environment variables

// Dummy user data for testing
const users = [
  {
    id: 1,
    fullname: 'Test User',
    password: 'password123'
  }
];

app.use(cors());
app.use(express.json());

// Login endpoint
app.post('/api/auth/login', (req, res) => {
  const { fullname, password } = req.body;
  
  const user = users.find(u => u.fullname === fullname && u.password === password);
  
  if (!user) {
    return res.status(401).json({ message: 'Неверные данные для входа' });
  }
  
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '24h' });
  
  res.json({
    token,
    user: {
      id: user.id,
      fullname: user.fullname
    }
  });
});

// Check auth status endpoint
app.get('/api/auth/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Не авторизован' });
  }
  
  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = users.find(u => u.id === decoded.userId);
    
    if (!user) {
      throw new Error('Пользователь не найден');
    }
    
    res.json({
      id: user.id,
      fullname: user.fullname
    });
  } catch (error) {
    res.status(401).json({ message: 'Недействительный токен' });
  }
});

// Logout endpoint
app.post('/api/auth/logout', (req, res) => {
  // В простой реализации просто возвращаем успешный статус
  // В реальном приложении здесь может быть логика инвалидации токена
  res.status(200).json({ message: 'Успешный выход из системы' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});