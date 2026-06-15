import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-smart-home-wash-machine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgSmartHomeWashMachine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6 4H18C18.55 4 19 4.45 19 5V8H5V5C5 4.45 5.45 4 6 4ZM19 19V10H5V19C5 19.55 5.45 20 6 20H18C18.55 20 19 19.55 19 19ZM3 5C3 3.34 4.34 2 6 2H18C19.66 2 21 3.34 21 5V19C21 20.66 19.66 22 18 22H6C4.34 22 3 20.66 3 19V5ZM7 5C6.45 5 6 5.45 6 6C6 6.55 6.45 7 7 7H9C9.55 7 10 6.55 10 6C10 5.45 9.55 5 9 5H7ZM14 7C14.55 7 15 6.55 15 6C15 5.45 14.55 5 14 5C13.45 5 13 5.45 13 6C13 6.55 13.45 7 14 7ZM18 6C18 6.55 17.55 7 17 7C16.45 7 16 6.55 16 6C16 5.45 16.45 5 17 5C17.55 5 18 5.45 18 6ZM14 15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15ZM16 15C16 17.21 14.21 19 12 19C9.79 19 8 17.21 8 15C8 12.79 9.79 11 12 11C14.21 11 16 12.79 16 15Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgSmartHomeWashMachine;
