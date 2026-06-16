import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-sound-detection-loud-sound",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSoundDetectionLoudSound {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M312-85 87-312l169-170v-225l452 451H483L312-85Zm249-231L316-559v102L171-312l141 141 145-145h104Zm223 26-44-44q49-89 36.5-188T692-693q-72-72-171.5-85T333-741l-44-44q107-68 231.5-54.5T735-736q90 90 103.5 214.5T784-290ZM649-424l-50-51q2-25-6.5-48.5T566-565q-18-18-41.5-27t-49.5-7l-51-51q48-17 98-5.5t86 47.5q36 36 47 86t-6 98Zm-283 59Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSoundDetectionLoudSound;
