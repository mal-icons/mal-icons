import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-palette2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPalette2 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0.5A0.50.5 0 0 1 0.5 0h5a0.50.5 0 0 1 0.50.5v5.28l4.15-4.13a0.50.5 0 0 1 0.71 0l3.54 3.54a0.50.5 0 0 1 0 0.71L10.26 10H15.5a0.50.5 0 0 1 0.50.5v5a0.50.5 0 0 1-0.50.5H3a3 3 0 0 1-2.12-0.88A3 3 0 0 1 0 13.04m6-0.21 7.33-7.3-2.83-2.83L6 7.19zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15 15v-4H9.26l-4.01 4zM0 0.5v12.5zm0 12.5V13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPalette2;
