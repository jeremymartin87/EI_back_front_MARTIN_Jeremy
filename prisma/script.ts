import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


async function main() {

    const tickets = await prisma.ticket.findMany()

    console.log(tickets)
    const Contact = await prisma.ticket.create({

        data: {
    
          titre: 'Erreur de code',
    
          description: 'La description est optionnelle !',

          statut: 'A faire',
    
        },
    
      })
    
      console.log(Contact)

}


main()
  .then(async () => {
    await prisma.$disconnect()
  })

  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })