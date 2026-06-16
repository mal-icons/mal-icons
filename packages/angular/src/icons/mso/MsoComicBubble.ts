import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-comic-bubble",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoComicBubble {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m440-831-91.21 91.21H220.21v128.58L129-520l91.21 91.21v128.58h128.58L440-209l104-104 210 107-108-209 105-105-91.21-91.21v-128.58H531.21L440-831Zm0-85 116 116h164v164l116 116-116 116 129 253q5 10 3.5 19t-8.5 16q-7 7-16 8.5t-19-3.5L556-240 440-124 324-240H160v-164L44-520l116-116v-164h164l116-116Zm1 398Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoComicBubble;
