import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-moscowmetro",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMoscowmetro {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.6 11.85l-2.48-6.26-2.09 3.66-2.09-3.66-2.48 6.26H6.74v0.94h3.74v-0.94h-0.55l0.54-1.55 1.57 2.57 1.57-2.570.54 1.56h-0.55v0.94h3.75v-0.94zm5.34-1.91A9.93 9.93 0 0 0 12 0C6.52 0 2.06 4.45 2.06 9.94c0 2.75 1.12 5.23 2.91 7.02a0.80.8 0 0 0 1.38-0.570.830.83 0 0 0-0.24-0.58 8.3 8.3 0 0 1-2.42-5.87c0-4.59 3.72-8.32 8.31-8.32 4.59 0 8.32 3.74 8.32 8.32a8.29 8.29 0 0 1-2.44 5.89l-7.02 7.02L12 24l7.04-7.04a9.89 9.89 0 0 0 2.9-7.02Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMoscowmetro;
