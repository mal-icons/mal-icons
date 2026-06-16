import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-low-priority",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLowPriority {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M602-700q-20 0-37-6.5T548-730q0-17 17-23.5t37-6.5h248q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-700H602Zm0 230q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T602-530h248q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-470H602Zm0 230q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T602-300h248q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-240H602Zm-297.87 87.16q-8.13-8.1-8.13-20.63Q296-186 304-195l43-45q-110 0-188.5-75T80-500q0-107 74.34-183.5Q228.68-760 336-760h122q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T458-700H336q-81.67 0-138.83 58.5Q140-583 140-500q0 85 62.5 142.5T352-300l-46-46q-8-8.19-8-20.09T307-387q9-9 21-9t21 9l94 95q5 5 7 10.13 2 5.13 2 11Q452-265 450-260q-2 5-7 10l-98 98q-8.19 8-20.09 8t-20.78-8.84Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLowPriority;
