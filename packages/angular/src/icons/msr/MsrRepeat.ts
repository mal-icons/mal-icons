import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-repeat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRepeat {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M700-270v-130q0-13 8.5-21.5T730-430q13 0 21.5 8.5T760-401v161q0 13-8.5 21.5T730-210H236l64 64q10 10 10 22.5t-9 21.5q-9 9-21 9.5t-21-8.5L141-219q-9-9-9-21t9-21l117-117q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5l-65 65h464ZM260-690v130q0 13-8.5 21.5T230-530q-13 0-21.5-8.5T200-559v-161q0-13 8.5-21.5T230-750h494l-64-64q-9-9-9.5-22t8.5-22q9-9 21-9.5t21 8.5l118 118q9 9 9 21t-9 21L702-582q-9 9-21.5 9t-21.5-9q-9-9-9-21.5t9-21.5l65-65H260Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRepeat;
