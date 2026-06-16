import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-more-horiz",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMoreHoriz {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M207.86-432Q188-432 174-446.14q-14-14.14-14-34Q160-500 174.14-514q14.14-14 34-14Q228-528 242-513.86q14 14.14 14 34Q256-460 241.86-446q-14.14 14-34 14Zm272 0Q460-432 446-446.14q-14-14.14-14-34Q432-500 446.14-514q14.14-14 34-14Q500-528 514-513.86q14 14.14 14 34Q528-460 513.86-446q-14.14 14-34 14Zm272 0Q732-432 718-446.14q-14-14.14-14-34Q704-500 718.14-514q14.14-14 34-14Q772-528 786-513.86q14 14.14 14 34Q800-460 785.86-446q-14.14 14-34 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMoreHoriz;
