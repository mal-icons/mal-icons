import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-electric-moped",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssElectricMoped {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M274.24-281Q226-281 192-315.5T158-398H80v-276h310v216h161l147-185v-138H575v-60h183v219L580-398H390q0 48-33.76 82.5-33.76 34.5-82 34.5ZM274-341q23 0 39.5-17t16.5-40H218q0 23 16.5 40t39.5 17Zm-74-393v-60h190v60H200Zm564.24 453Q716-281 682-314.76q-34-33.76-34-82Q648-445 681.77-479q33.76-34 82-34Q812-513 846-479.23q34 33.76 34 82Q880-349 846.24-315q-33.76 34-82 34ZM764-341q23 0 39.5-16.5T820-397q0-23-16.5-39.5T764-453q-23 0-39.5 16.5T708-397q0 23 16.5 39.5T764-341ZM520-41 291-157h153v-77l229 115H520v78ZM330-458Zm-190 0h190v-156H140v156Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssElectricMoped;
