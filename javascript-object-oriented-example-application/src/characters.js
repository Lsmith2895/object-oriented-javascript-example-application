
class character {
    constructor(type){
        this.type = type
    }

    setCharacterType(option){
        const availableCharacterTypes = ['hunter', 'titan', 'warlock']

        if (availableCharacterTypes.includes(option)) {
            this.type = option
        } else {
            throw Error ('this class is not available')
        }

        return this.type
        
    }
}

class hunter extends character {
    constructor(classSuper, unlockedClassSupers){
        super('hunter')
        this.classSuper = classSuper
        this.unlockedClassSupers = unlockedClassSupers
    }

    getSuper(){
        return this.classSuper
    }
    setSuper(selectedSuper){
        this.classSuper = selectedSuper
    }

    unlockClassSuper(achievement){
        if(this.unlockedClassSupers.includes(achievement)){
            return 'this super is already unlocked'
        } else {
            this.unlockedClassSupers.push(achievement)
        }

        return this.unlockedClassSupers
    }

    getAvailableSupers(){
        return this.unlockedClassSupers
    }
}

export{character, hunter}