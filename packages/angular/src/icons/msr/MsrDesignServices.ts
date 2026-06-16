import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-design-services",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDesignServices {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M751-596 596-751l70-70q17-17 42-17t42 17l71 71q17 17 17 42t-17 42l-70 70ZM120-120v-156l194-194L93-692l174-176 223 223 106-106 155 155-106 106 223 223L693-94 471-315 276-120H120Zm237-393 90-90-73-73-48 48-42-42 48-48-64-64-90 90 179 179Zm334 335 90-90-64-64-48 48-42-42 48-48-73-73-90 90 179 179Zm-511-2h70l415-415-70-70-415 415v70Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDesignServices;
