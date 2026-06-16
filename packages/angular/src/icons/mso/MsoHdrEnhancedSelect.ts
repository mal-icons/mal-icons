import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-hdr-enhanced-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHdrEnhancedSelect {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-422q-95.42 0-162.21-66.79Q251-555.58 251-651t66.79-162.21Q384.58-880 480-880t162.21 66.79Q709-746.42 709-651t-66.79 162.21Q575.42-422 480-422Zm0.2-60Q550-482 599.5-531.7q49.5-49.7 49.5-119.5Q649-721 599.3-770.5q-49.7-49.5-119.5-49.5Q410-820 360.5-770.3q-49.5 49.7-49.5 119.5Q311-581 360.7-531.5q49.7 49.5 119.5 49.5ZM450-537h60v-84h84v-60h-84v-84h-60v84h-84v60h84v84Zm30-114ZM831-97v-80h-80v-49h80v-80h49v80h80v49h-80v80h-49ZM527-80v-251h143q22 0 35.5 13t13.5 35v52q0 22-11.5 35T676-175l39 95h-53l-35-89h-52v89h-48Zm48-137h96v-66h-96v66ZM0-80v-251h48v87h93v-87h48v251h-48v-116H48v116H0Zm263 0v-251h140q22 0 35 13t13 35v155q0 22-13 35t-35 13H263Zm48-48h92v-155h-92v155Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHdrEnhancedSelect;
