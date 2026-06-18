import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-zendesk",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiZendesk {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.91 2.9V16.29L24 2.91H12.91zM0 2.91C0 5.97 2.48 8.45 5.54 8.45s5.54-2.48 5.54-5.54H0zm11.09 4.81L0 21.1h11.09V7.71zm7.37 7.84c-3.06 0-5.54 2.48-5.54 5.54H24c0-3.06-2.48-5.54-5.54-5.54z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiZendesk;
