# Japanese N5–N4 Web Dashboard

ชุดนี้มี 2 วิธีใช้งาน

## วิธีที่ 1: เปิดใช้ทันทีในเบราว์เซอร์
เปิดไฟล์ `Japanese_N5_N4_Dashboard_Standalone.html`

- ข้อมูลจะบันทึกใน Local Storage ของเบราว์เซอร์
- เหมาะสำหรับใช้คนเดียวบนเครื่องเดิม
- กด “สำรองข้อมูล” เพื่อดาวน์โหลดไฟล์ JSON

## วิธีที่ 2: ทำเป็นลิงก์ออนไลน์และบันทึกลง Google Sheets
1. เข้า https://script.google.com และสร้าง New project
2. วางเนื้อหา `Code.gs` ในไฟล์ Code.gs
3. สร้างไฟล์ HTML ชื่อ `Index` แล้ววางเนื้อหา `Index.html`
4. ไปที่ Project Settings และตั้ง Time zone เป็น Asia/Bangkok
5. กด Deploy → New deployment → Web app
6. Execute as: Me
7. Who has access: Anyone
8. กด Deploy และอนุญาตสิทธิ์
9. คัดลอก Web app URL นั่นคือลิงก์ใช้งานถาวร

เมื่อเปิดครั้งแรก ระบบจะสร้าง Google Sheets สำหรับเก็บข้อมูลให้อัตโนมัติใน Google Drive ของผู้ Deploy
