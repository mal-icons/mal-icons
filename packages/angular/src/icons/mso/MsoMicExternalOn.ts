import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-mic-external-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMicExternalOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M184-692q-14-15-19-34t-5-39q0-48 33-81.5t81-33.5q48 0 81 33.5t33 81.5q0 20-5 39t-19 34H184ZM396-80q-64 0-109.5-45T241-235h-34l-40-416h214l-40 416h-40q0 39 28 67t67 28q39 0 66.5-28t27.5-67v-490q0-65 45-110t110-45q65 0 110 45t45 110v645h-60v-645q0-39-28-67t-67-28q-39 0-67 28t-28 67v490q0 65-45 110T396-80ZM261-295h26l28-296h-82l28 296Zm26-296h-54 82-28Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMicExternalOn;
