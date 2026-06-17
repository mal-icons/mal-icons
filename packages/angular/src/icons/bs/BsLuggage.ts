import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-luggage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsLuggage {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 1a0.50.5 0 0 0-0.50.5V5h-0.5A1.5 1.5 0 0 0 0 6.5v7a1.5 1.5 0 0 0 1 1.42v0.34a0.750.75 0 0 0 1.5 0V15H4v-1H1.5a0.50.5 0 0 1-0.5-0.5v-7a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0.50.5V7h1v-0.5A1.5 1.5 0 0 0 6.5 5H6V1.5a0.50.5 0 0 0-0.5-0.5zM5 5H3V2h2z"}],["path",{"d":"M3 7.5a0.50.5 0 0 0-1 0v5a0.50.5 0 0 0 1 0zM11 6a1.5 1.5 0 0 1 1.5 1.5V8h2A1.5 1.5 0 0 1 16 9.5v5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 14.5v-5A1.5 1.5 0 0 1 6.5 8h2v-0.5A1.5 1.5 0 0 1 10 6zM9.5 7.5V8h2v-0.5A0.50.5 0 0 0 11 7h-1a0.50.5 0 0 0-0.50.5M6 9.5v5a0.50.5 0 0 0 0.50.5H7V9h-0.5a0.50.5 0 0 0-0.50.5m7 5.5V9H8v6zm1.5 0a0.50.5 0 0 0 0.5-0.5v-5a0.50.5 0 0 0-0.5-0.5H14v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsLuggage;
