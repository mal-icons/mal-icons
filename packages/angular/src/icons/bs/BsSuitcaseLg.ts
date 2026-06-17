import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-suitcase-lg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSuitcaseLg {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a0.50.5 0 0 1-1 0H3a0.50.5 0 0 1-1 0h-0.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a0.50.5 0 0 0-0.50.5v9a0.50.5 0 0 0 0.50.5H3V3zM15 12.5v-9a0.50.5 0 0 0-0.5-0.5H13v10h1.5a0.50.5 0 0 0 0.5-0.5m-3 0.5V3H4v10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSuitcaseLg;
