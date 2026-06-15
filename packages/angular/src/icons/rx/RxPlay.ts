import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-play",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxPlay {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.24 2.32C3.39 2.23 3.58 2.23 3.73 2.31L12.73 7.06C12.9 7.14 13 7.31 13 7.5C13 7.69 12.9 7.86 12.73 7.94L3.73 12.69C3.58 12.77 3.39 12.77 3.24 12.68C3.09 12.59 3 12.43 3 12.25V2.75C3 2.57 3.09 2.41 3.24 2.32ZM4 3.58V11.42L11.43 7.5L4 3.58Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxPlay;
