import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-fluid-med",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFluidMed {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M750-80q-24.75 0-42.37-17.62T690-140v-62q-73-11-121.5-66.5T520-400v-280h400v280q0 76-49 131.5T750-202v62h130v60H750Zm40-350h75v-195H575v115h55q30.49 0 57.75 14Q715-482 734-458q10 14 24.5 21t31.5 7Zm-70 175q53 0 92-32.5t50-82.5h-72q-30.85 0-58.42-13.5T686-422q-10.59-12.83-25.29-20.42Q646-450 630-450h-55v50q0 61 42 103t103 42Zm-34-203ZM310-61l-60-45v-174h-70q-24.75 0-42.37-17.62T120-340v-340H80v-60h170v-80h-60v-60h180v60h-60v80h170v60h-40v340q0 24.75-17.62 42.38T380-280h-70v219ZM180-340h200v-80H260v-60h120v-60H260v-60h120v-80H180v340Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFluidMed;
