import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-family-restroom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFamilyRestroom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 4c0-1.110.89-2 2-2s2 0.89 2 2-0.89 2-2 2-2-0.89-2-2zm4 17v-5h1.11c0.68 0 1.16-0.670.95-1.32l-2.1-6.31A2.01 2.01 0 0 0 18.06 7h-0.12a2 2 0 0 0-1.9 1.37l-0.86 2.58c1.080.6 1.82 1.73 1.82 3.05v8h2c0.55 0 1-0.45 1-1zm-7.5-9.5c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5S11 9.17 11 10s0.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-0.89 2-2s-0.89-2-2-2-2 0.89-2 2 0.89 2 2 2zm2 15v-6H8c0.55 0 1-0.45 1-1V9c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v5c0 0.550.45 1 1 1h0.5v6c0 0.550.45 1 1 1h2c0.55 0 1-0.45 1-1zm2.5-7v3c0 0.550.45 1 1 1v3c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1v-3c0.55 0 1-0.45 1-1v-3c0-0.82-0.68-1.5-1.5-1.5h-2c-0.82 0-1.50.68-1.5 1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFamilyRestroom;
