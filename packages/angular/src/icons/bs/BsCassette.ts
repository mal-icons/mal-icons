import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cassette",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCassette {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 6a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z"}],["path",{"d":"M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zM1 3.5a0.50.5 0 0 1 0.5-0.5h13a0.50.5 0 0 1 0.50.5v9a0.50.5 0 0 1-0.50.5h-0.69l-1.36-2.72A0.50.5 0 0 0 12 10H4a0.50.5 0 0 0-0.450.28L2.19 13H1.5a0.50.5 0 0 1-0.5-0.5zM11.69 11l1 2H3.31l1-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCassette;
