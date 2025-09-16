
require('dotenv').config();

const parseList = (envVar, fallback) => {
  if (!envVar) return fallback;
  try {
    return JSON.parse(envVar);
  } catch {
    return envVar.split(',').map(s => s.trim()).filter(Boolean);
  }
};

module.exports = {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  GITHUB_REPO_OWNER: process.env.GITHUB_REPO_OWNER || 'terrizevdev',
  GITHUB_REPO_NAME: process.env.GITHUB_REPO_NAME || 'session',

  // Bot behavior
  AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || 'true',
  AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'true',
  AUTO_RECORDING: process.env.AUTO_RECORDING || 'false',
  AUTO_LIKE_EMOJI: parseList(process.env.AUTO_LIKE_EMOJI, ['💋', '🍬', '🫆', '💗', '🎈', '🎉', '🥳', '❤️', '🧫', '🐭']),
  PREFIX: process.env.PREFIX || '.',
  MAX_RETRIES: parseInt(process.env.MAX_RETRIES || '3', 10),

  // Paths
  ADMIN_LIST_PATH: process.env.ADMIN_LIST_PATH || './admin.json',
  SESSION_BASE_PATH: process.env.SESSION_BASE_PATH || './session',
  NUMBER_LIST_PATH: process.env.NUMBER_LIST_PATH || './numbers.json',

  // Images / UI
  RCD_IMAGE_PATH: process.env.RCD_IMAGE_PATH || 'https://files.catbox.moe/letrek.jpg',
  CAPTION: process.env.CAPTION || '𝗖𝗛𝗔𝗟𝗔𝗛 𝗠𝗗  𝐅𝚁𝙴𝙴 𝐁𝙾𝚃',

  // Newsletter / channels
  NEWSLETTER_JID: (process.env.NEWSLETTER_JID || '120363397100406773@newsletter').trim(),
  CHANNEL_LINK: process.env.CHANNEL_LINK || 'https://whatsapp.com/channel/0029Vb57ZHh7IUYcNttXEB3y',

  // OTP & owner
  OTP_EXPIRY: parseInt(process.env.OTP_EXPIRY || '300000', 10), // ms
  OWNER_NUMBER: process.env.OWNER_NUMBER || '256752792178',

  // Misc
  GROUP_INVITE_LINK: process.env.GROUP_INVITE_LINK || 'https://chat.whatsapp.com/LVtMOpKXWogECSmtBylUix?mode=ac_t',
  PM2_NAME: process.env.PM2_NAME || 'SULA-MINI-main'
};