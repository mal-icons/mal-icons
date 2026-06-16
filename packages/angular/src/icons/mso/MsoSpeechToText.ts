import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-speech-to-text",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSpeechToText {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M689.57-570Q661-570 640.5-590.5T620-640v-160q0-29 20.56-49.5Q661.13-870 690-870q29 0 49.5 20.5T760-800v160q0 29-20.5 49.5T689.57-570ZM180-80q-24.75 0-42.37-17.62T120-140v-680q0-24.75 17.63-42.37T180-880h340v60H180v680h480v-110h60v110q0 24.75-17.62 42.38T660-80H180Zm100-170v-60h280v60H280Zm0-120v-60h200v60H280Zm440 40h-60v-102q-76-11-128-70Q480-561 480-640h60q0 62 43.88 106 43.89 44 105.97 44Q753-490 796.5-533.93 840-577.86 840-640h60q0 79-51.5 138T720-432v102Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSpeechToText;
