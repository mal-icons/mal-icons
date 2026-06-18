import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-fediverse-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFediverseLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 11.5V8.23L8.17 9.87L7.17 8.13L10 6.5L7.17 4.87L8.17 3.13L11 4.77V1.5H13V4.77L15.83 3.13L16.83 4.87L14 6.5L16.83 8.13L15.83 9.87L13 8.23V11.5H11ZM21.46 12.88L18.63 14.52V11.25H16.63V14.52L13.8 12.88L12.8 14.62L15.63 16.25L12.8 17.88L13.8 19.62L16.63 17.98V21.25H18.63V17.98L21.46 19.62L22.46 17.88L19.63 16.25L22.46 14.62L21.46 12.88ZM7.37 17.98L7.37 21.25L5.37 21.25L5.37 17.98L2.54 19.62L1.54 17.88L4.37 16.25L1.54 14.62L2.54 12.88L5.37 14.52L5.37 11.25H7.37L7.37 14.52L10.2 12.88L11.2 14.62L8.37 16.25L11.2 17.88L10.2 19.62L7.37 17.98Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFediverseLine;
