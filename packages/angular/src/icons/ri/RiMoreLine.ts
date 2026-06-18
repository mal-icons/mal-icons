import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-more-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMoreLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.5 10.5C3.68 10.5 3 11.18 3 12C3 12.83 3.68 13.5 4.5 13.5C5.33 13.5 6 12.83 6 12C6 11.18 5.33 10.5 4.5 10.5ZM19.5 10.5C18.68 10.5 18 11.18 18 12C18 12.83 18.68 13.5 19.5 13.5C20.33 13.5 21 12.83 21 12C21 11.18 20.33 10.5 19.5 10.5ZM12 10.5C11.18 10.5 10.5 11.18 10.5 12C10.5 12.83 11.18 13.5 12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.18 12.83 10.5 12 10.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMoreLine;
