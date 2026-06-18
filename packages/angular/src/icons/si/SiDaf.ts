import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-daf",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDaf {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.65 12.78h-2.64V8.72H24v1.18h-4.35v0.72h4.28v1.15h-4.28zm-7.51-3.04l-1.83 3.05H7.76l2.41-4.07h3.92l2.42 4.07h-5.36l0.64-1.06h1.53zM0 12.79V8.74h4.99c1.62 0 2.770.74 2.77 1.99 0 1.2-0.91 2.05-2.82 2.05zm4.01-1.03c0.62 0 0.99-0.530.99-0.93 0-0.41-0.32-0.9-0.97-0.9H2.67v1.83zM0 13.73h23.93v1.55H0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDaf;
