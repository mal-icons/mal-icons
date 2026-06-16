import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-business-messages",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBusinessMessages {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M246-160q-24 0-42-18t-18-42v-406L66-776q-6-8-2.09-16T78-800h742q24 0 42 18t18 42v520q0 24-18 42t-42 18H246Zm0-580v520h574v-520H246Zm264 367h176q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T686-433H437q-19.69 0-27.34 18.5Q402-396 416-382l93 92q9 9 21 9t21-9q9-9 9-21.5t-9-21.5l-41-40Zm60-214H394q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T394-527h249q19.69 0 27.34-18.5Q678-564 664-578l-93-92q-9-8-21-8t-21 8.25q-9 8.25-9 21t9 21.75l41 40ZM246-740v520-520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBusinessMessages;
