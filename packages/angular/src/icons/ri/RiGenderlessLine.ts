import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-genderless-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGenderlessLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 7.07C16.67 7.55 19.5 10.7 19.5 14.5C19.5 18.64 16.14 22 12 22C7.86 22 4.5 18.64 4.5 14.5C4.5 10.7 7.33 7.55 11 7.07V1H13V7.07ZM12 20C15.04 20 17.5 17.54 17.5 14.5C17.5 11.46 15.04 9 12 9C8.96 9 6.5 11.46 6.5 14.5C6.5 17.54 8.96 20 12 20Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGenderlessLine;
