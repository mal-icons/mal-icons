import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-h-5",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiH5 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 8V10H17.68L17.21 12.64C17.54 12.55 17.89 12.5 18.25 12.5C20.46 12.5 22.25 14.29 22.25 16.5C22.25 18.71 20.46 20.5 18.25 20.5C16.42 20.5 14.88 19.28 14.4 17.6L16.33 17.05C16.57 17.89 17.34 18.5 18.25 18.5C19.35 18.5 20.25 17.6 20.25 16.5C20.25 15.4 19.35 14.5 18.25 14.5C17.62 14.5 17.06 14.79 16.69 15.25L14.88 14.34L16 8H22ZM4 4V11H11V4H13V20H11V13H4V20H2V4H4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiH5;
