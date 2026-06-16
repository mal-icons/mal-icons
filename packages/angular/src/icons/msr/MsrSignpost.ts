import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-signpost",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSignpost {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.83-80Q467-80 458.5-88.62T450-110v-150H248q-8.65 0-16.94-3.61T217-273l-66-66q-6.88-6.62-9.94-14.72Q138-361.81 138-369.91q0-8.09 3.06-16.25Q144.12-394.32 151-401l66-66q5.77-5.78 14.06-9.39Q239.35-480 248-480h202v-90H200q-18.33 0-31.17-12.83Q156-595.67 156-614v-132q0-18.33 12.83-31.17Q181.67-790 200-790h250v-60q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T510-850v60h202q8.65 0 16.94 3.61T743-777l66 66q6.88 6.62 9.94 14.72Q822-688.19 822-680.09q0 8.09-3.06 16.26Q815.88-655.68 809-649l-66 66q-5.77 5.78-14.06 9.39Q720.65-570 712-570H510v90h250q18.33 0 31.17 12.83Q804-454.33 804-436v132q0 18.33-12.83 31.17Q778.33-260 760-260H510v150q0 12.75-8.68 21.38Q492.65-80 479.83-80ZM216-630h489l50-50-50-50H216v100Zm39 310h489v-100H255l-50 50 50 50Zm-39-310v-100 100Zm528 310v-100 100Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSignpost;
