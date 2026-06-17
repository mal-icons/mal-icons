import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-peace-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPeaceFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 13.29A8 8 0 0 0 8.50.02v7.78zm-0.710.71L8.5 9.21v6.78a7.97 7.97 0 0 0 4.79-1.99zM7.5 15.99V9.21L2.71 14A7.97 7.97 0 0 0 7.5 15.99M2 13.29A8 8 0 0 1 7.50.02v7.78z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPeaceFill;
