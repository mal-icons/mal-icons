import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-lava",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLava {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M257.19 45.88A44.87 44.87 0 0 0 211.28 91 44.87 44.87 0 1 0 301 91a44.87 44.87 0 0 0-43.81-45.12zM91.91 90.63A44.87 44.87 0 0 0 46 135.72a44.87 44.87 0 1 0 89.72 0 44.87 44.87 0 0 0-43.81-45.09zm330.28 0a44.87 44.87 0 0 0-45.91 45.09 44.87 44.87 0 1 0 89.72 0 44.87 44.87 0 0 0-43.81-45.09zM256.85 210.97A29.87 29.87 0 0 0 226.28 241a29.87 29.87 0 1 0 59.72 0 29.87 29.87 0 0 0-29.16-30.03zm-135 30A29.87 29.87 0 0 0 91.28 271a29.87 29.87 0 1 0 59.72 0 29.87 29.87 0 0 0-29.16-30.03zm270 0A29.87 29.87 0 0 0 361.28 271a29.87 29.87 0 1 0 59.72 0 29.87 29.87 0 0 0-29.16-30.03zm-135.5 89.81A15 15 0 0 0 241 345.88a15 15 0 1 0 30 0 15 15 0 0 0-14.66-15.09zm-120 15A15 15 0 0 0 121 360.88a15 15 0 1 0 30 0 15 15 0 0 0-14.66-15.09zm240 0A15 15 0 0 0 361 360.88a15 15 0 1 0 30 0 15 15 0 0 0-14.66-15.09zM76 375.88c-15 0-30 30-30 30-30 0-30 0-30 30v30h480v-30c0-30 0-30-30-30 0 0-15-30-30-30-30 0-30 45-60 45s-30-45-60-45-30 45-60 45-30-45-60-45-30 45-60 45-30-45-60-45z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLava;
