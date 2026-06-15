import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-clipboard-copy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxClipboardCopy {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5 2V1H10V2H5ZM4.75 0C4.34 0 4 0.34 4 0.75V1H3.5C2.67 1 2 1.67 2 2.5V12.5C2 13.33 2.67 14 3.5 14H7V13H3.5C3.22 13 3 12.78 3 12.5V2.5C3 2.22 3.22 2 3.5 2H4V2.25C4 2.66 4.34 3 4.75 3H10.25C10.66 3 11 2.66 11 2.25V2H11.5C11.78 2 12 2.22 12 2.5V7H13V2.5C13 1.67 12.33 1 11.5 1H11V0.75C11 0.34 10.66 0 10.25 0H4.75ZM9 8.5C9 8.78 8.78 9 8.5 9C8.22 9 8 8.78 8 8.5C8 8.22 8.22 8 8.5 8C8.78 8 9 8.22 9 8.5ZM10.5 9C10.78 9 11 8.78 11 8.5C11 8.22 10.78 8 10.5 8C10.22 8 10 8.22 10 8.5C10 8.78 10.22 9 10.5 9ZM13 8.5C13 8.78 12.78 9 12.5 9C12.22 9 12 8.78 12 8.5C12 8.22 12.22 8 12.5 8C12.78 8 13 8.22 13 8.5ZM14.5 9C14.78 9 15 8.78 15 8.5C15 8.22 14.78 8 14.5 8C14.22 8 14 8.22 14 8.5C14 8.78 14.22 9 14.5 9ZM15 10.5C15 10.78 14.78 11 14.5 11C14.22 11 14 10.78 14 10.5C14 10.22 14.22 10 14.5 10C14.78 10 15 10.22 15 10.5ZM14.5 13C14.78 13 15 12.78 15 12.5C15 12.22 14.78 12 14.5 12C14.22 12 14 12.22 14 12.5C14 12.78 14.22 13 14.5 13ZM14.5 15C14.78 15 15 14.78 15 14.5C15 14.22 14.78 14 14.5 14C14.22 14 14 14.22 14 14.5C14 14.78 14.22 15 14.5 15ZM8.5 11C8.78 11 9 10.78 9 10.5C9 10.22 8.78 10 8.5 10C8.22 10 8 10.22 8 10.5C8 10.78 8.22 11 8.5 11ZM9 12.5C9 12.78 8.78 13 8.5 13C8.22 13 8 12.78 8 12.5C8 12.22 8.22 12 8.5 12C8.78 12 9 12.22 9 12.5ZM8.5 15C8.78 15 9 14.78 9 14.5C9 14.22 8.78 14 8.5 14C8.22 14 8 14.22 8 14.5C8 14.78 8.22 15 8.5 15ZM11 14.5C11 14.78 10.78 15 10.5 15C10.22 15 10 14.78 10 14.5C10 14.22 10.22 14 10.5 14C10.78 14 11 14.22 11 14.5ZM12.5 15C12.78 15 13 14.78 13 14.5C13 14.22 12.78 14 12.5 14C12.22 14 12 14.22 12 14.5C12 14.78 12.22 15 12.5 15Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxClipboardCopy;
