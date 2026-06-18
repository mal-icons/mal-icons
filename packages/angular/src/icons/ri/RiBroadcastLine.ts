import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-broadcast-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBroadcastLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.93 2.93L6.34 4.34C4.9 5.79 4 7.79 4 10C4 12.21 4.9 14.21 6.34 15.66L4.93 17.07C3.12 15.26 2 12.76 2 10C2 7.24 3.12 4.74 4.93 2.93ZM19.07 2.93C20.88 4.74 22 7.24 22 10C22 12.76 20.88 15.26 19.07 17.07L17.66 15.66C19.1 14.21 20 12.21 20 10C20 7.79 19.1 5.79 17.66 4.34L19.07 2.93ZM7.76 5.76L9.17 7.17C8.45 7.9 8 8.9 8 10C8 11.1 8.45 12.1 9.17 12.83L7.76 14.24C6.67 13.16 6 11.66 6 10C6 8.34 6.67 6.84 7.76 5.76ZM16.24 5.76C17.33 6.84 18 8.34 18 10C18 11.66 17.33 13.16 16.24 14.24L14.83 12.83C15.55 12.1 16 11.1 16 10C16 8.9 15.55 7.9 14.83 7.17L16.24 5.76ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM11 14H13V22H11V14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBroadcastLine;
