import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-directions-alt-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDirectionsAltOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M833-41 652-222 480-50 50-480l172-172L26-848l43-43L876-84l-43 43ZM609-265l-73-74-56 56-43-43 56-56-69-68H283v-60h81l-99-99-129 129 344 344 129-129Zm129-43-43-43 129-129-344-344-129 129-43-43 172-172 430 430-172 172ZM609-437l43-43-197-197-43 43 197 197Zm-98-99Zm-74 99Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDirectionsAltOff;
