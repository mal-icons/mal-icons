import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-phone-vertical",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrPhoneVertical {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M17 23C18.1 23 19 22.1 19 21L19 3C19 1.9 18.1 1 17 1L7 1C5.9 1 5 1.9 5 3L5 21C5 22.1 5.9 23 7 23L17 23ZM11 21L7 21L7 3L17 3L17 21L13 21C13 20.99 13 20.98 13 20.97L13 19.97C13 19.42 12.55 18.97 12 18.97C11.45 18.97 11 19.42 11 19.97L11 20.97C11 20.98 11 20.99 11 21Z","fill":"currentColor"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrPhoneVertical;
