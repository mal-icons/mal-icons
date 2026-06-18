import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-number-6",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNumber6 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.89 2L10.45 9.69C10.95 9.56 11.47 9.5 12 9.5C15.59 9.5 18.5 12.41 18.5 16C18.5 19.59 15.59 22.5 12 22.5C8.41 22.5 5.5 19.59 5.5 16C5.5 14.79 5.83 13.67 6.4 12.7L12.58 2H14.89ZM12 11.5C9.51 11.5 7.5 13.51 7.5 16C7.5 18.49 9.51 20.5 12 20.5C14.49 20.5 16.5 18.49 16.5 16C16.5 13.51 14.49 11.5 12 11.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNumber6;
