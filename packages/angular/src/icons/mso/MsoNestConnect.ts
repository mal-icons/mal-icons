import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-nest-connect",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoNestConnect {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480.11-190Q559-190 614.5-245.57T670-380v-200q0-78.85-55.61-134.43Q558.79-770 479.89-770T345.5-714.42Q290-658.85 290-580v200q0 78.85 55.61 134.43Q401.21-190 480.11-190Zm0.01-60Q426-250 388-287.92 350-325.83 350-380v-200q0-54.17 37.88-92.08 37.88-37.92 92-37.92Q534-710 572-672.08q38 37.92 38 92.08v200q0 54.17-37.88 92.08-37.88 37.92-92 37.92Zm0.06-340q12.83 0 21.33-8.68 8.5-8.68 8.5-21.5 0-12.82-8.68-21.32-8.68-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.68-8.5 21.5 0 12.83 8.68 21.33 8.68 8.5 21.5 8.5ZM180-40q-24.75 0-42.37-17.62T120-100v-760q0-24.75 17.63-42.37T180-920h600q24.75 0 42.38 17.63T840-860v760q0 24.75-17.62 42.38T780-40H180Zm0-60h600v-760H180v760Zm0 0v-760 760Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoNestConnect;
