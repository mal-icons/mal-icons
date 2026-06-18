import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-rewind-start-mini-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRewindStartMiniLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 6C2.45 6 2 6.45 2 7V17C2 17.55 2.45 18 3 18C3.55 18 4 17.55 4 17V7C4 6.45 3.55 6 3 6ZM7.97 12L11 9.86V14.14L7.97 12ZM12.21 17.44C12.44 17.6 12.75 17.55 12.91 17.32C12.97 17.24 13 17.14 13 17.03V6.96C13 6.69 12.78 6.46 12.5 6.46C12.4 6.46 12.3 6.5 12.21 6.56L5.08 11.59C4.85 11.75 4.8 12.06 4.96 12.29C4.99 12.33 5.03 12.38 5.08 12.41L12.21 17.44ZM16.97 12L20 9.86V14.14L16.97 12ZM13.96 12.29C13.99 12.33 14.03 12.38 14.08 12.41L21.21 17.44C21.44 17.6 21.75 17.55 21.91 17.32C21.97 17.24 22 17.14 22 17.03V6.96C22 6.69 21.78 6.46 21.5 6.46C21.4 6.46 21.3 6.5 21.21 6.56L14.08 11.59C13.85 11.75 13.8 12.06 13.96 12.29Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRewindStartMiniLine;
