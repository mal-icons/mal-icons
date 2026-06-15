import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-mic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscMic {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 11C9.65 11 11 9.65 11 8V4C11 2.35 9.65 1 8 1C6.35 1 5 2.35 5 4V8C5 9.65 6.35 11 8 11ZM6 4C6 2.9 6.9 2 8 2C9.1 2 10 2.9 10 4V8C10 9.1 9.1 10 8 10C6.9 10 6 9.1 6 8V4ZM13 7.5V8C13 10.59 11.02 12.69 8.5 12.95V14.5C8.5 14.78 8.28 15 8 15C7.72 15 7.5 14.78 7.5 14.5V12.95C4.98 12.69 3 10.58 3 8V7.5C3 7.22 3.22 7 3.5 7C3.78 7 4 7.22 4 7.5V8C4 10.21 5.79 12 8 12C10.21 12 12 10.21 12 8V7.5C12 7.22 12.22 7 12.5 7C12.78 7 13 7.22 13 7.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscMic;
