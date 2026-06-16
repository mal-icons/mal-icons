import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-notification-multiple",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNotificationMultiple {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M50-120v-594h60v534h565v60H50Zm490-310L230-638v338h620v-338L540-430ZM170-240v-494l370-227 72 37-43 48-29-12-301 187 301 199 301-199-44-27 46-46 67 39v495H170Zm362-355L416-711l43-43 73 73 228-228 43 43-271 271Zm8 295h310-620 310Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNotificationMultiple;
