import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-instance-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiInstanceLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.5 7.65V16.35L12 20.69L19.5 16.35V7.65L12 3.31L4.5 7.65ZM12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM6.5 9.97L11 12.58V17.63H13V12.58L17.5 9.97L16.5 8.24L12 10.84L7.5 8.24L6.5 9.97Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiInstanceLine;
