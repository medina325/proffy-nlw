module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    // Inserir dados na table de proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)
                                    // lastID vem do SQLite
    const proffy_id = insertedProffy.lastID 

    // inserir dados na tabela classes
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)
    
    const class_id = insertedClass.lastID
    
    // Inserir dados na tabela class_schedule

    // map é uma estrutura de repetição, mas exige um return, cujo valor retornado será colocado em uma array
    const insertedAllClassScheduleValues = classScheduleValues.map((scheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${scheduleValue.weekday}",
                "${scheduleValue.time_from}",
                "${scheduleValue.time_to}"
            );
        `)
    })
    // aqui vou executar de fato, todos db.runs() das class_schedules (que são todas promessas)
    await Promise.all(insertedAllClassScheduleValues)
}

    