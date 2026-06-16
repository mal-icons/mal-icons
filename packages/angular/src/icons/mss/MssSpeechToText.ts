import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-speech-to-text",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSpeechToText {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M690-570q-29 0-49.5-20.5T620-640v-160q0-29 20.5-49.5T690-870q29 0 49.5 20.5T760-800v160q0 29-20.5 49.5T690-570ZM120-80v-800h400v60H180v680h480v-110h60v170H120Zm160-170v-60h280v60H280Zm0-120v-60h200v60H280Zm440 40h-60v-102q-76-11-128-70t-52-138h60q0 62 44 106t106 44q63 0 106.5-44T840-640h60q0 79-51.5 138T720-432v102Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSpeechToText;
