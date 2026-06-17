import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-feather2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFeather2 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.5 1.06v9.56L6 8.82V3a2 2 0 0 1 1.5-1.94M8 0a3 3 0 0 0-3 3v6a0.50.5 0 0 0 0.120.32L7.5 12.18V15.5a0.50.5 0 0 0 1 0v-3.32l2.38-2.86A0.50.5 0 0 0 11 9V3a3 3 0 0 0-3-3m0.5 1.06A2 2 0 0 1 10 3v0.29l-1.5 1.5zM10 4.71V8.82l-1.5 1.8V6.21z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFeather2;
