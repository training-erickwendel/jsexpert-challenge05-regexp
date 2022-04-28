// O objetivo do FLuent API e executar tarefas como um pipeline, step by step e no fim chama o build.
// Muito similar ao pattern Builder, a diferenca é sobre o processo (chamando métodos).
// enquanto o Builder é sobre construção de objetos.
class TextProcessorFluentAPI {
  #content
  constructor(content) {
    this.#content = content
  }

  extractCSVData() {
    const lines = this.#content.split('\n')
    const headers = lines.shift().split(';')
    headers.pop() // Retirar o new line (\r)

    const treatedData = lines.map(line => {
      const values = line.split(';')
      const data = {}

      headers.forEach((header, index) => {
        data[header] = values[index]
      })
      return data
    })

    this.#content = treatedData
    return this
  }

  build() {
    return this.#content
  }
}
module.exports = TextProcessorFluentAPI