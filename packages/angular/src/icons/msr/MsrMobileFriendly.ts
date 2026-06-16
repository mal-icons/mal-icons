import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-mobile-friendly",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMobileFriendly {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-40q-24.75 0-42.37-17.62T160-100v-760q0-24.75 17.63-42.37T220-920h440q24.75 0 42.38 17.63T720-860v146h-60v-56H220v580h440v-56h60v146q0 24.75-17.62 42.38T660-40H220Zm0-90v30h440v-30H220Zm378-275 218-218q9-9 21-9t21 9q9 9 9 21.5t-9 21.5L619-341q-9 9-21 9t-21-9L449-469q-9-9-8.5-21t9.5-21q9-9 21-9t21 9l106 106ZM220-830h440v-30H220v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMobileFriendly;
