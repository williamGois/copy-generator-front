import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { toast } from 'react-toastify'

import { Container } from './styles'

interface ICopyMessageWaveProps {
  copy: string
  createdAt?: string
}

export function CopyChatMessageWave(props: ICopyMessageWaveProps) {
  const { copy, createdAt } = props

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(`
      
        ${copy}
      `)

      toast.success('Copy copiada com sucesso', {
        position: toast.POSITION.TOP_CENTER,
      })
    } catch (err) {
      console.error(err)

      toast.error('Problemas ao copiar o texto por favor tente novamente.', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

  return (
    <Container onClick={copyToClipboard}>
      <header>
        {createdAt && (
          <span>
            {formatDistanceToNow(new Date(createdAt), {
              locale: ptBr,
              addSuffix: true,
            })}
          </span>
        )}
      </header>
      <p>{copy}</p>
    </Container>
  )
}
