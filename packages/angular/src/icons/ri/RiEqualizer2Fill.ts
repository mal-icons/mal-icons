import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-equalizer-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiEqualizer2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 7C3 5.07 4.57 3.5 6.5 3.5C8.43 3.5 10 5.07 10 7C10 8.93 8.43 10.5 6.5 10.5C4.57 10.5 3 8.93 3 7ZM20 8H12V6H20V8ZM14 17C14 15.07 15.57 13.5 17.5 13.5C19.43 13.5 21 15.07 21 17C21 18.93 19.43 20.5 17.5 20.5C15.57 20.5 14 18.93 14 17ZM12 16V18H4V16H12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiEqualizer2Fill;
