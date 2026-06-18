import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-sip-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSipFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.96 6.5L16.79 3.67C17.18 3.28 17.81 3.28 18.2 3.67L20.32 5.79C20.71 6.18 20.71 6.82 20.32 7.21L17.5 10.04L19.26 11.8L17.85 13.22L10.78 6.15L12.19 4.73L13.96 6.5ZM10.78 8.98L15.02 13.22L7.24 21H3V16.75L10.78 8.98Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSipFill;
