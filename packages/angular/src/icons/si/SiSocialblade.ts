import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-socialblade",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSocialblade {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.32 16.69H0v1.89h2.32v-1.89ZM5.94 13.59H3.61v4.99h2.32v-4.99ZM9.55 14.8H7.23v3.79h2.32v-3.78ZM13.16 13.94H10.84v4.65h2.32v-4.65ZM16.77 12.04h-2.32v6.54h2.32v-6.54ZM20.39 10.07h-2.32v8.52h2.32v-8.52ZM24 5.42h-2.32v13.16H24V5.42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSocialblade;
