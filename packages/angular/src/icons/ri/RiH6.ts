import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-h-6",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiH6 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.1 8L18.5 12.5C20.71 12.5 22.5 14.29 22.5 16.5C22.5 18.71 20.71 20.5 18.5 20.5C16.29 20.5 14.5 18.71 14.5 16.5C14.5 15.76 14.7 15.07 15.05 14.48L18.79 8H21.1ZM4 4V11H11V4H13V20H11V13H4V20H2V4H4ZM18.5 14.5C17.4 14.5 16.5 15.4 16.5 16.5C16.5 17.6 17.4 18.5 18.5 18.5C19.6 18.5 20.5 17.6 20.5 16.5C20.5 15.4 19.6 14.5 18.5 14.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiH6;
